<template>
  <div class="container mx-auto">
    <div id="typography" class="mb-8">
      <a href="#typography" class="text-2xl mb-sm block">Typography</a>
      <div class="grid grid-cols-4">
        <div class="group">
          <p class="text-sm">.text-sm</p>
          <p class="text-base">.text-base</p>
          <p class="text-lg">.text-lg</p>
          <p class="text-xl">.text-xl</p>
          <p class="text-2xl">.text-2xl</p>
        </div>
        <div class="group">
          <p class="font-thin text-sm">.text-sm.font-thin</p>
          <p class="font-thin text-base">.text-base.font-thin</p>
          <p class="font-thin text-lg">.text-lg.font-thin</p>
          <p class="font-thin text-xl">.text-xl.font-thin</p>
          <p class="font-thin text-2xl">.text-2xl.font-thin</p>
        </div>
        <div class="group">
          <p class="font-medium text-sm">.text-sm.font-medium</p>
          <p class="font-medium text-base">.text-base.font-medium</p>
          <p class="font-medium text-lg">.text-lg.font-medium</p>
          <p class="font-medium text-xl">.text-xl.font-medium</p>
          <p class="font-medium text-2xl">.text-2xl.font-medium</p>
        </div>
        <div class="group">
          <p class="font-bold text-sm">.text-sm.font-bold</p>
          <p class="font-bold text-base">.text-base.font-bold</p>
          <p class="font-bold text-lg">.text-lg.font-bold</p>
          <p class="font-bold text-xl">.text-xl.font-bold</p>
          <p class="font-bold text-2xl">.text-2xl.font-bold</p>
        </div>
      </div>
    </div>

    <div id="buttons" class="mb-8">
      <a href="#buttons" class="text-2xl mb-4 block">Buttons</a>

      <button class="btn mr-sm">.btn</button>

      <button class="btn btn-primary mr-sm">.btn.btn-primary</button>
      <button class="btn mr-sm btn-white">.btn.btn-white</button>
      <button class="btn mr-sm btn-black">.btn.btn-black</button>
      <button class="btn mr-sm btn-green">.btn.btn-green</button>
      <button class="btn mr-sm btn-red">.btn.btn-red</button>
      <button class="btn mr-sm btn-yellow">.btn.btn-yellow</button>

      <div class="text-lg my-sm">[disabled]</div>

      <button disabled class="btn btn-primary mr-sm">.btn.btn-primary</button>
      <button disabled class="btn mr-sm btn-white">.btn.btn-white</button>
      <button disabled class="btn mr-sm btn-black">.btn.btn-black</button>
      <button disabled class="btn mr-sm btn-green">.btn.btn-green</button>
      <button disabled class="btn mr-sm btn-red">.btn.btn-red</button>
      <button disabled class="btn mr-sm btn-yellow">.btn.btn-yellow</button>

      <div class="text-lg my-sm">Size</div>

      <div class="border-4 border-dashed border-yellow p-lg">
        <button class="btn btn-primary btn-block">.btn.btn-primary.btn-block</button>
      </div>
    </div>

    <div id="alert" class="mt-lg">
      <a href="#alert" class="text-2xl mb-sm block">Alert</a>

      <div class="border-4 border-dashed border-yellow p-lg">
        <div class="alert alert-danger">
          <div class="container">
            Hello
          </div>
        </div>
      </div>
    </div>
    <div id="table" class="mt-lg">
      <div href="#table" class="text-2xl mb-sm block">Table</div>
      <table class="table table-border">
        <thead>
          <tr>
            <th>
              title1
            </th>
            <th>
              title2
            </th>
            <th>
              title3
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              content1
            </td>
            <td>
              content2
            </td>
            <td>
              content3
            </td>
          </tr>
          <tr>
            <td>
              content1
            </td>
            <td>
              content2
            </td>
            <td>
              content3
            </td>
          </tr>
        </tbody>
      </table>

    </div>

    <div id="layout" class="mt-lg">
      <div href="#layout" class="text-2xl mb-sm block">Layout</div>
      <div>
        <div class="text-2xl mb-sm block">
          .admin-layout
          <div class="float-right">
            <a class="text-primary" href="/layout.html">view full screen</a>
          </div>
        </div>
        <div class="h-screen w-full">
          <div class="admin-layout bg-primary">
            <div class="sidebar bg-red">

              <div class="logo-box">
                <div class="bg-white">
                  .sidebar.logo-box
                </div>
              </div>
              <div class="list-group bg-black">
                <div class="text-white">.list-group</div>
                <div class="list-group-item">
                  <i class="list-icon">i</i>
                  .list-group-item
                </div>

                <div class="list-group-item">
                  .list-group-item
                  <div class="list-item-tips">
                    49
                  </div>
                </div>


                <div class="list-group-item">
                  .list-group-item
                </div>
                <div class="list-group-item">
                  .list-group-item
                </div>
                <div class="list-group-item">
                  .list-group-item
                </div>
                <div class="list-group-item">
                  .list-group-item
                </div>
                <div class="list-group-item">
                  .list-group-item
                </div>
                <div class="list-group-item">
                  .list-group-item
                </div>
                <div class="list-group-item">
                  .list-group-item
                </div>
                <div class="list-group-item">
                  .list-group-item
                </div>
                <div class="list-group-item">
                  .list-group-item
                </div>

                <div class="list-group-item active">
                  .list-group-item.active
                </div>

              </div>
            </div>
            <div class="main-content bg-green">
              <div class="content-header">
                <div class="breadcrumb  bg-white">
                  <div class="breadcrumb-item">
                    <a href="#">.breadcrumb</a>
                  </div>
                  <div class="breadcrumb-item">
                    .breadcrumb-item
                  </div>
                  <div class="breadcrumb-item active">
                    .breadcrumb-item.active
                  </div>
                </div>
              </div>

              <div class="content-body bg-blue-light">
                <div style="height: 200vh" class="text-white">.content-body 很多内容</div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
