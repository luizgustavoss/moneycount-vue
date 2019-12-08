<template>
  <div id="blankslate" class="container-fluid">
    <div class="row justify-content-md-center">
      <div class="col-lg-2 col-md-3 col-sm-3">
        <img src="/static/money.png" class="img-fluid"/>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-4" style="text-align: left;">
        <form>
          <div class="form-group">
            <label for="currency">Selecione a Moeda:</label>
            <select 
              class="form-control" 
              id="select-currency"
              v-model="currencySelected">
              <option 
                v-for="currency in currencies"
                v-bind:value="currency.code">
                {{ currency.description }}
              </option>
            </select>
            <small id="currencyHelp" class="form-text text-muted">O cálculo será realizado utilizando uma única moeda.</small>
          </div>
          <button type="submit" class="btn btn-dark" @click="redirectToNewProcess">Novo Cálculo</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blankslate',
  data () {
    return {
      currencies: [
        {
          code: 'BRL',
          description: 'Real (R$)'
        },
        {
          code: 'US',
          description: 'Dólar (US$)'
        }
      ],
      currencySelected: 'BRL'
    }
  },
  methods: {
    redirectToNewProcess: function (event) {
      
    }
  }
}
</script>
