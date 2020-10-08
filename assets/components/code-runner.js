import * as _ from "lodash";
import shortid from "shortid";

const React = require("react");
const ReactDOM = require("react-dom");

class ConsoleCapture {
  constructor(onLog) {
    this.streams = {
      default: [],
    };
    this.onLog = onLog;
    this.onErrorHandler = this.handleError.bind(this);
    this.attachErrorHandler(this.onErrorHandler);
  }

  attachErrorHandler(handler) {
    console.log({ name: "attachErrorHandler", msg: "entering" });
    window.addEventListener("error", handler);
    window.addEventListener("unhandledrejection", handler);
  }

  removeErrorHandler(handler) {
    console.log({ name: "removeErrorHandler", msg: "entering" });
    window.removeEventListener("error", handler);
    window.removeEventListener("unhandledrejection", handler);
  }

  stringify(...args) {
    return args.map((v, i) => {
      return { id: shortid.generate(), val: JSON.stringify(v) };
    });
  }

  stream(streamName) {
    const _this = this;
    const logger = {
      log: function (...args) {
        _this.logToStream(streamName, ...args);
        return logger;
      },
    };

    return logger;
  }

  raw(...args) {
    console.log(...args);
  }

  log(...args) {
    this.logToStream("default", ...args);
  }

  logToStream(streamName, ...args) {
    const newStreams = { ...this.streams };
    const stream = newStreams[streamName] || [];
    newStreams[streamName] = [...stream, ...this.stringify(...args)];
    this.streams = newStreams;
    this.onLog(this.filterStreams(this.streams));
  }

  handleError(messageOrEvent, source, lineno, colno, error) {
    console.log({ name: "handleError", msg: "entering", messageOrEvent, source, lineno, colno, error });
    const streamName = "default";
    const newStreams = { ...this.streams };
    const stream = newStreams[streamName] || [];
    const [msg] = this.stringify(
      (messageOrEvent && messageOrEvent.message) || 
      (messageOrEvent && messageOrEvent.reason && messageOrEvent.reason.message)
    );
    msg.isError = true;
    newStreams[streamName] = [...stream, msg];
    this.streams = newStreams;
    this.onLog(this.filterStreams(this.streams));
  }

  setFilter(filter) {
    if (!_.isString(filter)) return;

    this.filter = filter;
  }

  filterStreams(streams) {
    if (_.isNil(this.filter)) return streams;

    return _.pick(streams, this.filter);
  }

  destroy() {
    this.streams = { default: [] };
    this.onLog = () => {};
    this.removeErrorHandler(this.onErrorHandler);
  }
}

function evalCode(options, console, _) {
  const { code = "", systemImport } = options;
  let cleanCode = cleanImports(code);

  if (_.isString(systemImport)) {
    cleanCode = createSystemImportBlock(systemImport);
  }

  const log = (streamName = "default") => (source) =>
    source.do((val) => console.stream(streamName).log(val));

  //soooo eval!!! much dangerous!!!
  eval(`
  (function(){
    'use strict';

    ${cleanCode}
  }());
  `);
}

function createSystemImportBlock(importUrl) {
  return `
  
  var consoleModule = System.newModule({console:console});

  System.resolve('console')
    .then(function(modulePath){
      System.registry.delete(modulePath);
      System.registry.set(modulePath, consoleModule);
      return System.resolve("${importUrl}");
    })
    .then(function(modulePath){
      System.registry.delete(modulePath);
      return System.import("${importUrl}");
    });
  `;
}

function cleanImports(code) {
  return code.replace(/import.*;/g, "// $1");
}

const containerStyle = {
  paddingLeft: "15px",
  borderLeft: "2px solid #16222F",
  display: "flex",
  justifyContent: "center",
  paddingTop: "60px",
  fontFamily: `Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace`,
};

const itemStyle = {
  flexGrow: 1,
  flexBasis: 0,
  maxHeight: "600px",
  overflowX: "hidden",
  overflowY: "auto",
  fontSize: "1.5em",
};

const itemHeaderStyle = {
  marginBottom: "20px",
  display: "block",
  color: "#999",
  position: "absolute",
  top: "15px",
  backgroundColor: "black",
  zIndex: "1000",
  fontSize: "1em",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
};

export default class CodeRunner extends React.Component {
  constructor() {
    super();
    this.scrollTargetId = shortid.generate();
    this.state = {
      streams: {},
    };
    this.consoleLogger = new ConsoleCapture((streams) => {
      this.setState({ streams });
    });
  }

  scrollToBottom = () => {
    const streams = this.state.streams;
    const streamNames = Object.keys(streams);

    _.forEach(streamNames, (n) => {
      const node = ReactDOM.findDOMNode(this[`${n}_${this.scrollTargetId}`]);
      if (node) {
        node.scrollIntoView();
      }
    });
  };

  componentDidUpdate() {
    this.scrollToBottom();
  }

  componentDidMount() {
    const { code, systemImport, filter } = this.props;

    this.consoleLogger.setFilter(filter);

    evalCode({ code, systemImport }, this.consoleLogger, _);

    this.scrollToBottom();
  }

  componentWillUnmount() {
    this.consoleLogger.destroy();
  }

  render() {
    const streams = this.state.streams;

    const streamNames = Object.keys(streams);

    return (
      <div style={containerStyle}>
        {streamNames.map((name) => (
          <div
            style={itemStyle}
            className="nice-scrollbar console-log"
            key={name}
          >
            <div style={itemHeaderStyle}>// {name}:</div>
            {streams[name].map((log, i) => (
              <div
                className={`animated flipInX ${log.isError ? "error" : ""}`}
                key={log.id}
              >
                {log.val}
              </div>
            ))}
            <div
              style={{ float: "left", clear: "both" }}
              ref={(el) => {
                this[`${name}_${this.scrollTargetId}`] = el;
              }}
            ></div>
          </div>
        ))}
      </div>
    );
  }
}
