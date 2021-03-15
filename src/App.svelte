<script>
  import { theme } from "./stores";
  import { onMount } from "svelte";
  import ThemeToggle from "./ThemeToggle.svelte";

  let text = "";

  theme.subscribe((theme) => (document.body.className = theme));

  $: document.title = text || "Add text...";

  onMount(() => {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has("text")) text = urlParams.get("text");
    if (urlParams.has("theme")) theme.set(urlParams.get("theme"));

    window.history.pushState(null, null, "/");
  });
</script>

<svelte:head>
  <link
    rel="icon"
    href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2250%22 fill=%22%23${
      $theme === "dark" ? "000000" : "ffffff"
    }%22></rect><path fill=%22%23fff%22 d=%22%22></path></svg>`}
  />
</svelte:head>

<input autofocus bind:value={text} />

<ThemeToggle />

{#if text}
  <button
    title="Copy URL"
    on:click={() =>
      navigator.clipboard.writeText(
        `${window.location.origin}/?theme=${$theme}&text=${text.replaceAll(
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
