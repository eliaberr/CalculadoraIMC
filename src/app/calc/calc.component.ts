import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {

  altura: number=0;
  peso: number=0;
  imc: number=0;
  apagar: number=0;
  result: string = '';


  calculo(){
    this.imc = Number((this.peso / (this.altura * this.altura)).toFixed(2));


    if (this.imc < 18.5)
    {
      this.result = 'Magreza';
    }

    else
    {
      if (this.imc<24.9)
      {
        this.result = 'Peso Normal';
      }

      else
      {
        if (this.imc<29.9)
        {
          this.result = 'Sobrepeso';
        }

        else
        {
          if (this.imc<34.9)
          {
            this.result = 'Obesidade grau I';
          }

          else
          {
            if (this.imc<40)
            {
              this.result = 'Obesidade grau II';
            }

            else
            {
              if (this.imc>40)
              {
                this.result = 'Obesidade grau III';
              }
            }
          }
        }
      }
    }
  }

  limpar()
  {
    this.altura = this.apagar;
    this.peso = this.apagar;
    this.imc = this.apagar;
    this.result = '';
  }




}
