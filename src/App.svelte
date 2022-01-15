<script>
  import { text, theme } from "./stores";
  import CopyUrl from "./CopyUrl.svelte";
  import Editor from "./Editor.svelte";
  import ThemeToggle from "./ThemeToggle.svelte";

  $: document.title = $text || "Add text...";
</script>

<svelte:head>
  <link
    rel="icon"
    href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2250%22 fill=%22%23${
      $theme === "dark" ? "000000" : "ffffff"
    }%22></rect><path fill=%22%23fff%22 d=%22%22></path></svg>`}
  />
</svelte:head>

<Editor />
<ThemeToggle />
<CopyUrl />
