<script>
  import { text } from "./stores";
</script>

<input
  autofocus
  on:input={(event) => text.set(event.currentTarget.value)}
  spellcheck={false}
  value={$text}
/>

<style>
  input {
    background-color: transparent;
    border: none;
    color: var(--text-color);
    font-family: system-ui, sans-serif;
    font-size: 5vmax;
    font-weight: 700;
    margin: 0 auto;
    padding: 3rem;
    text-align: center;
    white-space: normal;
    width: 100vw;
    transition: color 200ms;
  }

  input:focus {
    outline: none;
  }
</style>
