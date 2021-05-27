# Modal

## Example

<div class="playground text-center">
  <button class="btn btn-primary" @click="show_modal = 'simple-modal'">Simple Modal</button>

  <div class="modal" :class="show_modal == 'simple-modal' && 'show'" id="simple-modal" @click="show_modal = ''">
    <div class="modal-dialog" @click.stop="">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Header</h5>
          <button class="close-btn" @click="show_modal = ''"></button>
        </div>
        <div class="modal-body">
          {{msg}}
        </div>
      </div>
    </div>
  </div>
</div>

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


## Action Modal

<div class="playground text-center">
  <button class="btn btn-primary" @click="show_modal = 'action-modal'">Action Modal</button>

  <div class="modal" :class="show_modal == 'action-modal' && 'show'" id="action-modal" @click="show_modal = ''">
    <div class="modal-dialog" @click.stop="">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Header</h5>
          <button class="close-btn" @click="show_modal = ''"></button>
        </div>
        <div class="modal-body">
          {{msg}}
        </div>
        <div class="modal-footer">
          <button class="btn btn-default">取消</button>
          <button class="btn btn-primary">确定</button>
        </div>
      </div>
    </div>
  </div>

</div>

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
      <div class="modal-footer">
        <button class="btn btn-default">取消</button>
        <button class="btn btn-primary">确定</button>
      </div>
    </div>
  </div>
</div>
```



## Right Action Modal

<div class="playground text-center">
  <button class="btn btn-primary" @click="show_modal = 'right-action-modal'">Right Action Modal</button>

  <div class="modal" :class="show_modal == 'right-action-modal' && 'show'" id="action-modal" @click="show_modal = ''">
    <div class="modal-dialog" @click.stop="">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Header</h5>
          <button class="close-btn" @click="show_modal = ''"></button>
        </div>
        <div class="modal-body">
          {{msg}}
        </div>
        <div class="modal-footer right-btn">
          <button class="btn btn-default">取消</button>
          <button class="btn btn-primary">确定</button>
        </div>
      </div>
    </div>
  </div>

</div>

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
      <div class="modal-footer">
        <button class="btn btn-default">取消</button>
        <button class="btn btn-primary">确定</button>
      </div>
    </div>
  </div>
</div>
```

<script>
  import { h, ref } from 'vue'
  export default {
    data: function(){
      return {
        msg: '弹窗',
        show_modal: ""
      }
    },
  }
</script>
