class EventEmitter {
  constructor() {
    this.events = {};
  }

  // Register an event and its listener
  on(event, listener) {
    if (typeof this.events[event] !== "object") {
      this.events[event] = [];
    }

    this.events[event].push(listener);
  }

  // Trigger an event (with optional data)
  emit(event, ...args) {
    if (typeof this.events[event] === "object") {
      this.events[event].forEach(listener => listener.apply(this, args));
    }
  }

  // Remove a specific listener from an event
  off(event, listener) {
    if (typeof this.events[event] === "object") {
      const idx = this.events[event].indexOf(listener);
      if (idx > -1) {
        this.events[event].splice(idx, 1);
      }
    }
  }

  // Remove all listeners from an event
  removeAllListeners(event) {
    if (typeof this.events[event] === "object") {
      this.events[event] = [];
    }
  }

  // Get all listeners of an event
  listeners(event) {
    return this.events[event];
  }
}

export default EventEmitter;