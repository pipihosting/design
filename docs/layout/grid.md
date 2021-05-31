# Grid

## Row

<div class="playground">
  <div class="row">
    <div class="col-span-6">col-span-6</div>
    <div class="col-span-6">col-span-6</div>
  </div>
  <div class="row">
    <div class="col-span-2">col-span-2</div>
    <div class="col-span-4">col-span-4</div>
  </div>
  <div class="row">
    <div class="col-span-2">col-span-2</div>
    <div class="col-span-4 col-start-4">col-span-4 col-start-4</div>
  </div>
  <div class="row">
    <div class="col-start-4 col-end-13">col-start-4 col-end-13</div>
  </div>
</div>

<style>
.row > [class^="col"] {
  @apply bg-light-light p-4 border;
}
</style>
