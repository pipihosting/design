# Form

## Inputs

<div class="playground">
  <input class="form-control border" value="input.form-control"/>
  <input class="form-control form-control-sm border mt-lg" value="input.form-control.form-control-sm"/>
  <div class="input-icon mt-lg">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.925 12.75l2.833 2.824a.838.838 0 0 1-1.184 1.184l-2.824-2.833a6.601 6.601 0 0 1-4.083 1.408 6.667 6.667 0 1 1 6.666-6.666 6.601 6.601 0 0 1-1.408 4.083zM8.667 3.667a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/></svg>
    <input class="form-control border" value=".input-icon input.form-control"/>
  </div>
  <select class="form-control border mt-lg">
    <option>select.form-control</option>
  </select>
  <input class="form-control border mt-lg" disabled value="input.form-control:disabled"/>
</div>

```html
<input class="form-control border" value="input.form-control"/>
<input class="form-control form-control-sm border mt-lg" value="input.form-control.form-control-sm"/>
<div class="input-icon mt-lg">
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.925 12.75l2.833 2.824a.838.838 0 0 1-1.184 1.184l-2.824-2.833a6.601 6.601 0 0 1-4.083 1.408 6.667 6.667 0 1 1 6.666-6.666 6.601 6.601 0 0 1-1.408 4.083zM8.667 3.667a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/></svg>
  <input class="form-control border" value=".input-icon input.form-control"/>
</div>
<select class="form-control border mt-lg">
  <option>select.form-control</option>
</select>
<input class="form-control border mt-lg" disabled value="input.form-control:disabled"/>
```

## Checks

<div class="playground">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" id="checkbox-default">
    <label class="form-check-label" for="checkbox-default">Default checkbox</label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" id="checkbox-checked" checked>
    <label class="form-check-label" for="checkbox-checked">Checked checkbox</label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" id="checkbox-disabled" disabled>
    <label class="form-check-label" for="checkbox-disabled">Disabled checkbox</label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" id="checkbox-disabled-checked" checked disabled>
    <label class="form-check-label" for="checkbox-disabled-checked">Disabled checked checkbox</label>
  </div>
</div>

```html
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="checkbox-default">
  <label class="form-check-label" for="checkbox-default">Default checkbox</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="checkbox-checked" checked>
  <label class="form-check-label" for="checkbox-checked">Checked checkbox</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="checkbox-disabled" disabled>
  <label class="form-check-label" for="checkbox-disabled">Disabled checkbox</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="checkbox-disabled-checked" checked disabled>
  <label class="form-check-label" for="checkbox-disabled-checked">Disabled checked checkbox</label>
</div>
```

## Radios

<div class="playground">
  <div class="form-check">
    <input class="form-check-input" type="radio" id="checkbox-default">
    <label class="form-check-label" for="checkbox-default">Default checkbox</label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" id="checkbox-checked" checked>
    <label class="form-check-label" for="checkbox-checked">Checked checkbox</label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" id="checkbox-disabled" disabled>
    <label class="form-check-label" for="checkbox-disabled">Disabled checkbox</label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" id="checkbox-disabled-checked" checked disabled>
    <label class="form-check-label" for="checkbox-disabled-checked">Disabled checked checkbox</label>
  </div>
</div>

```html
<div class="form-check">
  <input class="form-check-input" type="radio" id="checkbox-default">
  <label class="form-check-label" for="checkbox-default">Default checkbox</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" id="checkbox-checked" checked>
  <label class="form-check-label" for="checkbox-checked">Checked checkbox</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" id="checkbox-disabled" disabled>
  <label class="form-check-label" for="checkbox-disabled">Disabled checkbox</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" id="checkbox-disabled-checked" checked disabled>
  <label class="form-check-label" for="checkbox-disabled-checked">Disabled checked checkbox</label>
</div>
```

## Switches

<div class="playground">
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" id="switch-default">
    <label class="form-check-label" for="switch-default">Default switch</label>
  </div>
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" id="switch-checked" checked>
    <label class="form-check-label" for="switch-checked">Checked switch</label>
  </div>
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" id="switch-disabled" disabled>
    <label class="form-check-label" for="switch-disabled">Disabled switch</label>
  </div>
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" id="switch-disabled-checked" checked disabled>
    <label class="form-check-label" for="switch-disabled-checked">Disabled checked switch</label>
  </div>
</div>

```html
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="switch-default">
  <label class="form-check-label" for="switch-default">Default switch</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="switch-checked" checked>
  <label class="form-check-label" for="switch-checked">Checked switch</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="switch-disabled" disabled>
  <label class="form-check-label" for="switch-disabled">Disabled switch</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="switch-disabled-checked" checked disabled>
  <label class="form-check-label" for="switch-disabled-checked">Disabled checked switch</label>
</div>
```
