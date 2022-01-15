<script>
  import { onMount } from "svelte";

  let theme = "light";

  onMount(() => {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has("theme")) theme = urlParams.get("theme");

    window.history.pushState(null, null, "/");
  });

  $: document.body.className = theme;
</script>

{#if theme === "dark"}
  <button title="Light Mode" on:click={() => (theme = "light")}>
    <svg viewBox="0 0 20 20">
      <path
        fill-rule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
{:else}
  <button title="Dark Mode" on:click={() => (theme = "dark")}>
    <svg viewBox="0 0 20 20">
      <path
        d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
      />
    </svg>
  </button>
{/if}

<style>
  button {
    position: absolute;
    bottom: 1.5rem;
    left: 1.5rem;
    cursor: pointer;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: var(--text-color);
    opacity: 0.25;
    transition: opacity 200ms;
  }

  svg:hover {
    opacity: 1;
  }
</style>
