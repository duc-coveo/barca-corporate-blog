import { Component, h } from "@stencil/core";
import template1 from "./template-1.html";

/**
 * Component used to manage results & result templates.
 * See https://docs.coveo.com/en/atomic/latest/usage/create-a-result-list/
 */
@Component({
  tag: "results-manager",
  shadow: false,
})
export class ResultsManager {
  public render() {
    return (
      <atomic-result-list
        fields-to-include="source,filetype,date,author,sourcetype,language"
        display="list"
        density="comfortable"
      >
        <atomic-result-template>
          <template innerHTML={template1}></template>
        </atomic-result-template>
      </atomic-result-list>
    );
  }
}
