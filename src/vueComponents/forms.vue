<template>
  <div class="container p-4">
    <h3 class="text-2xl mb-4 block">Form</h3>
    <div class="w-1/2 my-lg">
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




    <div class="grid grid-cols-4 gap-4 my-lg">
      <div></div>
      <div class="text-lg">CheckBox</div>
      <div class="text-lg">RadioButton</div>
      <div class="text-lg">ToggleButton</div>
      <div class="text-sm">Default</div>
      <div>
        <input type="checkbox" id="checkbox1"/>
        <label for="checkbox1">Default</label>
      </div>
      <div>
        <input type="radio" id="radio1" name="radio-btn"/>
        <label for="radio1">Default</label>
      </div>
      <div>
        <input type="checkbox" id="toggle-btn1" class='toggle-btn-checkbox'/>
        <label for="toggle-btn1" class="toggle-btn">
          <div class='open-hint'>On</div>
          <div class='close-hint'>Off</div>
        </label>
      </div>
      <div class="text-sm">Selected</div>
      <div>
        <input type="checkbox" id="checkbox2" checked/>
        <label for="checkbox2">Checked</label>
      </div>
      <div>
        <input type="radio" id="radio2" name="radio-btn" checked/>
        <label for="radio2">Checked</label>
      </div>
      <div>
        <input type="checkbox" id="toggle-btn2" checked class='toggle-btn-checkbox'/>
        <label for="toggle-btn2" class="toggle-btn">
          <div class='open-hint'>On</div>
          <div class='close-hint'>Off</div>
        </label>
      </div>
      <div class="text-sm">Disabled</div>
      <div>
        <input type="checkbox" id="checkbox3" disabled/>
        <label for="checkbox3">Disabled</label>
      </div>
      <div>
        <input type="radio" id="radio3" name="radio-btn" disabled/>
        <label for="radio3">Disabled</label>
      </div>
      <div>
        <input type="checkbox" id="toggle-btn3" disabled class='toggle-btn-checkbox'/>
        <label for="toggle-btn3" class="toggle-btn">
          <div class='open-hint'>Disabled</div>
          <div class='close-hint'>Disabled</div>
        </label>
      </div>
    </div>
  </div>
</template>
