# Modal

## Example

<div class="playground text-center">
  <button class="btn btn-primary" @click="show_modal = true">Simple Modal</button>
  <div class="modal" :class="show_modal && 'show'" id="simple-modal" @click="show_modal = false">
    <div class="modal-dialog" @click.stop="">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Header</h5>
          <button class="close-btn" @click="show_modal = false"></button>
        </div>
        <div class="modal-body">
          {{msg}}
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  import { h, ref } from 'vue'
  export default {
    data: function(){
      return {
        msg: '弹窗',
        show_modal: false
      }
    },
  }
</script>

```html
<div class="modal show">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        Header
        <div class="close-btn">
          X
        </div>
      </div>
      <div class="modal-body">
        Modal的内容
      </div>
    </div>
  </div>
</div>
```
