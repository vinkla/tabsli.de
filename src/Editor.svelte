<script>
  import { onMount } from "svelte";
  import { text } from "./stores";

  let content;

  onMount(() => {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has("text")) {
      content = urlParams.get("text");
      text.set(content);
    }
  });
</script>

<!-- svelte-ignore a11y-autofocus -->
<div
  autofocus
  contenteditable
  on:input={(event) => text.set(event.currentTarget.textContent)}
  spellcheck={false}
>
  {content || ""}
</div>

<style>
  div {
    background-color: transparent;
    border: none;
    color: var(--text-color);
    font-family: system-ui, sans-serif;
    font-size: 5vw;
    font-weight: 700;
    margin: 0 auto;
    padding: 3rem;
    text-align: center;
    white-space: normal;
    width: 100vw;
    transition: color 200ms;
  }

  div:focus {
    outline: none;
  }
</style>
