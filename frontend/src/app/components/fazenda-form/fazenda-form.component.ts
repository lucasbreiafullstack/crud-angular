import { Component, OnInit } from '@angular/core';
import { FazendaService, Fazenda } from '../../services/fazenda.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fazenda-form',
  templateUrl: './fazenda-form.component.html',
})
export class FazendaFormComponent implements OnInit {
  fazenda: Fazenda = {
    nome: '',
    matricula: '',
    localizacao: '',
    dono: '',
    area: 0,
    tipo_plantacao: '',
  };
  id: string | null = null;

  constructor(
    private fazendaService: FazendaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.fazendaService.getFazenda(this.id).subscribe((data) => {
        this.fazenda = data;
      });
    }
  }

  saveFazenda() {
    if (this.id) {
      this.fazendaService.updateFazenda(this.id, this.fazenda).subscribe(() => {
        this.router.navigate(['/fazendas']);
      });
    } else {
      this.fazendaService.createFazenda(this.fazenda).subscribe(() => {
        this.router.navigate(['/fazendas']);
      });
    }
  }
}
