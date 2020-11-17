var objeto = {
    mascotas: ['perros','gatos','canarios','pez','serpiente'],
    esSegura: false,
    llamarAlerta: function alerta(message){
        alert(message);
    },
    esHttps: function (){
        var https = this.esSegura;
        if(https == true){
            this.esSegura = false;
            return https;
        } else{
            https = true;
            return https;
        }
    },
    eliminarMascota: function(mascota){
        var posicion = this.mascotas.indexOf(mascota);
        this.mascotas.splice(posicion, 1);

        return this.mascotas;
    },
    eliminarUltimaMascota: function(){
        this.mascotas.pop();
        return this.mascotas;
    },
    agregarMascota: function(nueva){
        this.mascotas.push(nueva);
        return this.mascotas;
    },
    contadorMascotas: function(){
        var tipos = 0;
        for(tipo of this.mascotas){
            if(tipo.includes('os')){
                tipos ++;
            }
        }
        console.log(tipos);
        return `En el arreglo hay ${tipos} mascotas que terminan en 'os' `;
    }
}