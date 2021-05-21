# Modal

## Example

<div class="playground text-center">
  <button class="btn btn-primary" @click="openModal">Open Modal</button>
  <div class="modal" :class="show_modal && 'show'" id="simple-modal" @click="hiddenModal">
    <div class="modal-dialog" @click.stop="">
      <div class="modal-content">
        <div class="modal-header">
          Header
          <div class="close-btn" @click="hiddenModal">
            X
          </div>
        </div>
        <!--Body-->
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
    methods: {
      openModal: function(){
        this.show_modal = true
      },
      hiddenModal: function(){
        this.show_modal = false
      }
    }
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
