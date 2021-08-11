<script>
  import { alignment } from "./stores";

  $: document.documentElement.style.setProperty("--text-alignment", $alignment);
</script>

{#if $alignment === "center"}
  <button on:click={() => alignment.set("left")}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      /></svg
    >
  </button>
{:else if $alignment === "left"}
  <button on:click={() => alignment.set("center")}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h7"
      /></svg
    >
  </button>
{/if}

<style>
  button {
    position: absolute;
    bottom: 1.5rem;
    left: 3.5rem;
    cursor: pointer;
  }

  svg {
    width: 20px;
    height: 20px;
    stroke: var(--text-color);
    opacity: 0.25;
    transition: opacity 200ms;
  }

  svg:hover {
    opacity: 1;
  }
</style>
