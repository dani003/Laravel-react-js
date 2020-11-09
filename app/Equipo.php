<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Equipo extends Model
{
    protected $table = 'equipo';

    //Relacion Many To One / Muchos a uno
    public function laboratorio(){
        return $this->belongsTo('App\Laboratorio', 'id_laboratorio');
    }

    //Relacion Many To One / Muchos a uno
    public function image(){
        return $this->hasMany('App\Reserva');
    }

}
