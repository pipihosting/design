# List Group

## Example

<div class="playground">
  <div class="list-group w-64 bg-black">
    <a class="list-group-item with-icon">
      <svg class="list-item-icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.052 1.285a2.084 2.084 0 0 0-2.104 0l-5.817 3.38C2.433 5.07 2 5.845 2 6.685v6.63c0 .84.433 1.615 1.13 2.02l5.818 3.38c.655.38 1.449.38 2.104 0l5.818-3.38c.696-.405 1.13-1.178 1.13-2.02v-6.63c0-.84-.433-1.614-1.13-2.02l-5.818-3.38zM9.65 2.631a.694.694 0 0 1 .7 0l5.148 2.989L10 9.103 4.503 5.62 9.65 2.631zm6.896 4.117l-5.819 3.687v6.715l5.442-3.16a.776.776 0 0 0 .377-.674V6.748zm-7.273 3.687v6.715L3.83 13.99a.778.778 0 0 1-.377-.674V6.748l5.819 3.687z"/></svg>
      菜单
    </a>
    <a class="list-group-item with-icon collapsible">
      <svg class="list-item-icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.052 1.285a2.084 2.084 0 0 0-2.104 0l-5.817 3.38C2.433 5.07 2 5.845 2 6.685v6.63c0 .84.433 1.615 1.13 2.02l5.818 3.38c.655.38 1.449.38 2.104 0l5.818-3.38c.696-.405 1.13-1.178 1.13-2.02v-6.63c0-.84-.433-1.614-1.13-2.02l-5.818-3.38zM9.65 2.631a.694.694 0 0 1 .7 0l5.148 2.989L10 9.103 4.503 5.62 9.65 2.631zm6.896 4.117l-5.819 3.687v6.715l5.442-3.16a.776.776 0 0 0 .377-.674V6.748zm-7.273 3.687v6.715L3.83 13.99a.778.778 0 0 1-.377-.674V6.748l5.819 3.687z"/></svg>
      菜单
    </a>
    <a class="list-group-item with-icon collapsible expanded">
      <svg class="list-item-icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.052 1.285a2.084 2.084 0 0 0-2.104 0l-5.817 3.38C2.433 5.07 2 5.845 2 6.685v6.63c0 .84.433 1.615 1.13 2.02l5.818 3.38c.655.38 1.449.38 2.104 0l5.818-3.38c.696-.405 1.13-1.178 1.13-2.02v-6.63c0-.84-.433-1.614-1.13-2.02l-5.818-3.38zM9.65 2.631a.694.694 0 0 1 .7 0l5.148 2.989L10 9.103 4.503 5.62 9.65 2.631zm6.896 4.117l-5.819 3.687v6.715l5.442-3.16a.776.776 0 0 0 .377-.674V6.748zm-7.273 3.687v6.715L3.83 13.99a.778.778 0 0 1-.377-.674V6.748l5.819 3.687z"/></svg>
      菜单
    </a>
    <div class="collapsed">
      <a class="list-group-item">
        未读消息
        <div class="list-item-tips">
          49
        </div>
      </a>
      <a class="list-group-item active">
        订单
      </a>
    </div>
  </div>
</div>

```html
<ul class="list-group w-64 bg-black">
  <li class="list-group-item with-icon">
    <svg class="list-item-icon" width="20" height="20" ...></svg>
    菜单
  </li>
  <li class="list-group-item with-icon collapsible">
    <svg class="list-item-icon" width="20" height="20" ...></svg>
    菜单
  </li>
  <li class="list-group-item with-icon collapsible expanded">
    <svg class="list-item-icon" width="20" height="20" ...></svg>
    菜单
  </li>
  <li class="list-group-item">
    未读消息
    <div class="list-item-tips">
      49
    </div>
  </li>
  <li class="list-group-item active">
    订单
  </li>
</ul>
```
