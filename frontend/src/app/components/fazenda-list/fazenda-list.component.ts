import { Component, OnInit } from '@angular/core';
import { FazendaService, Fazenda } from '../../services/fazenda.service';

@Component({
  selector: 'app-fazenda-list',
  templateUrl: './fazenda-list.component.html',
})
export class FazendaListComponent implements OnInit {
  fazendas: Fazenda[] = [];

  constructor(private fazendaService: FazendaService) {}

  ngOnInit(): void {
    this.fazendaService.getFazendas().subscribe((data) => {
      this.fazendas = data;
    });
  }

  deleteFazenda(id: string) {
    this.fazendaService.deleteFazenda(id).subscribe(() => {
      this.fazendas = this.fazendas.filter((f) => f.id !== id);
    });
  }
}
