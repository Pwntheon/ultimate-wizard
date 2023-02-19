import Processor from "./processors/processor";
import Trace from "@/utils/trace";

export default class Engine {
  #refreshRate: number;
  #lastTime = 0;
  #started = false;
  #processors: Processor[] = [];

  constructor(refreshRate = 1) {
    this.#refreshRate = refreshRate;
  }

  get interval() { return 1000 / this.#refreshRate; }

  setRefreshRate(refreshRate: number) {
    this.#refreshRate = refreshRate;
    Trace(`Refresh rate set to ${refreshRate}`);
  }

  addProcessor(processor: Processor) {
    this.#processors.push(processor);
  }

  start() {
    if (this.#started) throw new Error("Attempted to start game loop when it's already running");

    this.#lastTime = window.performance.now();
    this.#started = true;
    Trace("Main loop started");
    this.#run(0);
  }

  stop() {
    if (!this.#started) throw new Error("Attempted to stop game loop when it's not running");
    this.#started = false;
    Trace("Main loop stopped");
  }

  cleanup() {
    this.#processors = [];
    if (this.#started) this.stop();
  }

  #run(time: number) {
    if (!this.#started) return;
    requestAnimationFrame(this.#run.bind(this));

    const deltaTime = time - this.#lastTime;
    if (deltaTime > this.interval) {
      this.#lastTime = time - (deltaTime % this.interval);
      this.#processors.forEach(process => process(deltaTime / 1000));
    }
  }
}