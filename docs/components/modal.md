# Modal

## Example

<div class="playground text-center">
  <button class="btn btn-primary" onclick="openModal('simple-modal')">Open Modal</button>
  <div class="modal" id="simple-modal" style="background: rgba(0,0,0,.7);">
    <div
      class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          Header
          <div class="close-btn">
            X
          </div>
        </div>
        <!--Body-->
        <div class="modal-body">
          Modal的内容
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  function openModal(id){
    var modal = document.getElementById(id);
    modal.classList.add("show");
  }
</script>

```html
<div class="modal" style="background: rgba(0,0,0,.7);">
  <div
    class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        Header
        <div class="close-btn">
          X
        </div>
      </div>
      <!--Body-->
      <div class="modal-body">
        Modal的内容
      </div>
    </div>
  </div>
</div>
```
