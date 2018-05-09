<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class RegisterDataTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testExample()
    {
        $this->post('/create_data',['type-user'=>'2',
                      'employee-role'=>'Prueba',
                      'type-identification'=>'Prueba',
                      'identification-card'=>'',
                      'names'=>'Prueba',
                      'last-names'=>'Prueba',
                      'telephone'=>'3122',
                      'address'=>'Prueba',
                      'email'=>'Prueba',
                      'names-estate'=>'Prueba',
                      'address-estate'=>'Prueba',
                      'altitude-estate'=>'Prueba',
                      'city-estate'=>'Prueba',
                      'vereda-estate'=>'Prueba',
                      'btn-manage' => 'save'])->assertStatus(200);
    }

    public function testRegisterLotsIndex()
    {
      $this->post('/create_lots',['id-estate'=>'1',
                      'input-date'=>'Prueba',
                      'kilos-number'=>'10',
                      'avaible-kilos'=>'200',
                      'pasilla-percentage'=>'20',
                      'white-percentage'=>'20',
                      'fermented-percentage'=>'20',
                      'borer'=>'20',
                      'yield-factor'=>'7899',
                      'cup-score'=>'12',
                      'aroma'=>'ee',
                      'flavor'=>'er',
                      'acidity'=>'er',
                      'body'=>'er',
                      'sweetnees'=>'er',
                      'balance-value'=>'12',
                      'balance-description'=>'Prueba',
                      'btn-manage'=>'save'])->assertStatus(200);

    }

    public function testRegisterEstates()
    {
      $this->post('/create_estate',['id-estate'=>'1',
                  'names-estate'=>'Prueba',
                  'address-estate'=>'Prueba',
                  'altitude-estate'=>'200ms',
                  'city-estate'=>'Cali',
                  'vereda-estate'=>'Prueba'])->assertStatus(200);
    }

}
