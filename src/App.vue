<template>
  <div>
    <div class="container text-center mt-5">
      <div class="row">
        <div class="col-12">
          <div class="btn-group" role="group" aria-label="Basic example">
            <div class="form-group">
              <label for="">Change Theme</label>
              <select class="custom-select" @change="(e) => change(e.target.value)">
              <option value="dark">Dark</option>
              <option value="light">Light</option>
              <option value="navy">Navy</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h3>Buttons</h3>
          <div class="d-flex justify-content-center" style="gap: 8px">
            <button type="button" class="btn btn-red">red</button>
            <button type="button" class="btn btn-pink">pink</button>
            <button type="button" class="btn btn-indigo">indigo</button>
            <button type="button" class="btn btn-blue">blue</button>
            <button type="button" class="btn btn-blue-dark">blue dark</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useThemeChange} from "@/hooks/themeChange.ts";

export default {
  name: 'App',
  setup() {
    const { change } = useThemeChange();

    return {
      change
    }
  }
}
</script>
