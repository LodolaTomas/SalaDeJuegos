import { Component, OnInit } from '@angular/core';
import {Scoresrpt} from '../../../clases/scoresrpt';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import {GameRptService} from '../../../services/game-rpt.service';


@Component({
  selector: 'app-piedra-papelo-tijera',
  templateUrl: './piedra-papelo-tijera.component.html',
  styleUrls: ['./piedra-papelo-tijera.component.css']
})
export class PiedraPapeloTijeraComponent implements OnInit {
  resultado: string;
  jugadaRealizada: string;
  puntosUser = 0;
  puntoPC = 0;

  lista = this.gameSv.GetAll().valueChanges();

  scoreNuevo : Scoresrpt;

  constructor(
    private gameSv : GameRptService
  ) { 
    this.scoreNuevo = new Scoresrpt();
  }
  alert(icon: SweetAlertIcon, text: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,

      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: icon,
      title: text
    })
  }

  ngOnInit(): void {
    this.resultado = 'Esperando...';
    this.jugadaRealizada = "(+1 Ganar) (-1 Perder) (0 Empate)";
  }

  jugadaPC() {
    const eleccion = ['Roca', 'Papel', 'Tijera'];//piedra(r) , papel, tijeras
    const random = Math.floor(Math.random() * 3);
    return eleccion[random];
  }

  play(jugadaUser: string): void {
    const jugadaPC = this.jugadaPC();
    const jugadaPcUser = jugadaUser + jugadaPC;
    this.jugadaRealizada = jugadaUser + " VS " + jugadaPC;
    this.ganador(jugadaPcUser);
    console.log(`Jugadas realizadas: ${jugadaPcUser} ${this.scoreNuevo.score}`);
  }

  ganador(jugada) {
    switch (jugada) {
      //Win
      case 'PapelRoca':
      case 'TijeraPapel':
      case 'RocaTijera':
        {
          this.resultado = "Ganaste!!";
          this.puntosUser += 1;
          this.scoreNuevo.score +=1;
        }
        break;
      //Loss
      case 'PapelTijera':
      case 'TijeraRoca':
      case 'RocaPapel':
        {
          this.resultado = "Gano la PC";
          this.puntoPC += 1;
          this.scoreNuevo.score -= 1;
        }
        break;
      //Draw
      case 'PapelPapel':
      case 'TijeraTijera':
      case 'RocaRoca':
        {
          this.resultado = "Empate";
          this.scoreNuevo.score += 0;
        }
        break;
    }
  }

  tableroGanadores(): void {
    this.lista = this.gameSv.GetAll().valueChanges();


    console.log(this.lista);
  }

  guardarScore(){
    if (this.puntosUser != 0) {
      this.gameSv.AgregarScore(this.scoreNuevo);

      this.alert('info', 'Puntaje guardado');
    }
    else {
      this.alert('warning', 'Debes jugar primero');
    }
    
  }
}
