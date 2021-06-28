# Form

## Inputs

<div class="playground">
  <div class="form-group">
    <label class="form-label" for="default-control">Default form-control</label>
    <input class="form-control" placeholder="Default form-control" id="default-control" >
  </div>

  <div class="form-group">
    <label class="form-label" for="small-control">Small form-control</label>
    <input class="form-control form-control-sm" placeholder="Small form-control" id="small-control" >
  </div>

  <div class="form-group">
    <label class="form-label" for="icon-control">Form control with icon</label>
    <div class="input-icon">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.925 12.75l2.833 2.824a.838.838 0 0 1-1.184 1.184l-2.824-2.833a6.601 6.601 0 0 1-4.083 1.408 6.667 6.667 0 1 1 6.666-6.666 6.601 6.601 0 0 1-1.408 4.083zM8.667 3.667a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/></svg>
      <input class="form-control" placeholder="Form control with icon" id="icon-control">
    </div>
  </div>

  <div class="form-group">
    <label class="form-label" for="icon-control">Select</label>
    <select class="form-control">
      <option>Select</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
  </div>

  <div class="form-group">
    <input class="form-control" disabled value="disabled"/>
  </div>

  <div class="form-group">
    <input class="form-control" readonly value="Readonly"/>
  </div>

  <div class="form-group">
    <label class="form-label" for="icon-control">Date Range</label>
    <div class="input-group">
      <input class="form-control" placeholder="Default form-control" id="default-control" type="date" >
      <span class="input-group-text">TO</span>
      <input class="form-control" placeholder="Default form-control" id="default-control" type="date" >
    </div>
  </div>

  <div class="form-group">
    <label class="form-label" for="icon-control">Date Range</label>
    <div class="input-group">
      <span class="input-group-text">Date</span>
      <input class="form-control" placeholder="Default form-control" id="default-control">
    </div>
  </div>
</div>

```html
<div class="form-group">
  <label class="form-label" for="default-control">Default form-control</label>
  <input class="form-control" placeholder="Default form-control" id="default-control" >
</div>

<div class="form-group">
  <label class="form-label" for="small-control">Small form-control</label>
  <input class="form-control form-control-sm" placeholder="Small form-control" id="small-control" >
</div>

<div class="form-group">
  <label class="form-label" for="icon-control">Form control with icon</label>
  <div class="input-icon">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.925 12.75l2.833 2.824a.838.838 0 0 1-1.184 1.184l-2.824-2.833a6.601 6.601 0 0 1-4.083 1.408 6.667 6.667 0 1 1 6.666-6.666 6.601 6.601 0 0 1-1.408 4.083zM8.667 3.667a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/></svg>
    <input class="form-control" placeholder="Form control with icon" id="icon-control">
  </div>
</div>

<div class="form-group">
  <label class="form-label" for="icon-control">Select</label>
  <select class="form-control">
    <option>Select</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
</div>

<div class="form-group">
  <input class="form-control" disabled value="disabled"/>
</div>

<div class="form-group">
  <input class="form-control" readonly value="Readonly"/>
</div>
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
