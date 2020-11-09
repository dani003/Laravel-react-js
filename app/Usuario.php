<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $table = 'usuario';

    //Relacion Many To One / Muchos a uno
    public function tipo_usuario(){
        return $this->belongsTo('App\Laboratorio', 'id_tipo_usuario');
    }

    //Relacion Many To One / Muchos a uno
    public function reserva(){
        return $this->hasMany('App\Reserva');
    }

}
