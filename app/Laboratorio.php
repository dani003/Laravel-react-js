<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Laboratorio extends Model
{
    protected $table = 'laboratorio';

    //Relacion Many To One / Muchos a uno
    public function image(){
        return $this->hasMany('App\Equipo');
    }

}
