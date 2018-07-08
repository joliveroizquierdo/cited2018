
new Vue({
  el: 'main',
	mounted() {
		this.consulta();
	},
	data: {
		inscripciones: [],
	},
	methods: {
		consulta() {
			axios.get('http://206.189.163.40/inscripciones')
			.then((respuesta) => {
				//console.log(respuesta);
				this.inscripciones = respuesta.data;
				console.log(this.inscripciones);
			})
		},
	}

})

