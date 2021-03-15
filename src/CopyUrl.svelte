<script>
  import { text, theme } from "./stores";

  function handleClick() {
    navigator.clipboard.writeText(
      `${window.location.origin}/?theme=${$theme}&text=${$text.replaceAll(
        " ",
        "+"
      )}`
    );
  }
</script>

{#if $text}
  <button title="Copy URL" on:click={handleClick}>
    <svg viewBox="0 0 20 20">
      <path
        d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"
      />
      <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
    </svg>
  </button>
{/if}

<style>
  svg {
    bottom: 1.5rem;
    cursor: pointer;
    fill: var(--text-color);
    height: 20px;
    opacity: 0.25;
    right: 1.5rem;
    position: absolute;
    transition: opacity 200ms;
    width: 20px;
  }

  svg:hover {
    opacity: 1;
  }
</style>
