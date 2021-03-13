<script>
  import { onMount } from "svelte";

  let text = "";
  let theme = "light";

  $: document.body.className = theme;
  $: document.title = text || "Add text...";

  onMount(() => {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has("text")) text = urlParams.get("text");
    if (urlParams.has("theme")) theme = urlParams.get("theme");

    window.history.pushState(null, null, "/");
  });
</script>

<svelte:head>
  <link
    rel="icon"
    href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2250%22 fill=%22%23${
      theme === "dark" ? "000000" : "ffffff"
    }%22></rect><path fill=%22%23fff%22 d=%22%22></path></svg>`}
  />
</svelte:head>

<input autofocus bind:value={text} />

{#if theme === "dark"}
  <button title="Light Mode" on:click={() => (theme = "light")}>
    <svg class="theme" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        clipRule="evenodd"
      />
    </svg>
  </button>
{:else}
  <button title="Dark Mode" on:click={() => (theme = "dark")}>
    <svg class="theme" viewBox="0 0 20 20">
      <path
        d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
      />
    </svg>
  </button>
{/if}

{#if text}
  <button
    title="Copy URL"
    on:click={() =>
      navigator.clipboard.writeText(
        `${window.location.origin}/?theme=${theme}&text=${text.replaceAll(
          " ",
          "+"
        )}`
      )}
  >
    <svg class="copy" viewBox="0 0 20 20">
      <path
        d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"
      />
      <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
    </svg>
  </button>
{/if}
