<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reserva extends Model
{
    protected $table = 'reserva';

    //Relacion Many To One / Muchos a uno
    public function usuario(){
        return $this->belongsTo('App\Usuario', 'id_usuario');
    }

    //Relacion Many To One / Muchos a uno
    public function equipo(){
        return $this->belongsTo('App\Equipo', 'id_equipo');
    }

    //Relacion Many To One / Muchos a uno
    public function tipo_estado(){
        return $this->belongsTo('App\Tipo_estado', 'id_tipo_estado');
    }

}
