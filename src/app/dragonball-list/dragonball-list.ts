import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragonballService } from '../services/dragonball';
import { DragonballListResponse, DragonballItems } from '../models/dragonball';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-dragonball-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dragonball-list.html',
  styleUrls: ['./dragonball-list.scss']
})
export class DragonballListComponent implements OnInit {
  characters!: DragonballListResponse;
  currentPage = 1;
  totalPages = 1;

  private readonly dragonballService: DragonballService = inject(DragonballService);

  constructor() {}

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters() {
    this.dragonballService.getCharacters(this.currentPage).subscribe(data => {
      this.characters = data;
      this.totalPages = data.meta.totalPages;
    });
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadCharacters();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadCharacters();
    }
  }

  // ✅ Méthode pour calculer le pourcentage de puissance
  getKiPercentage(character: DragonballItems): number {
    if (!character.maxKi || character.maxKi === 0) return 0;
    return Math.round((character.ki / character.maxKi) * 100);
  }

  // ✅ Optionnel : couleur dynamique selon la puissance
  getKiColor(character: DragonballItems): string {
    const percent = this.getKiPercentage(character);
    if (percent >= 80) return '#ff1744'; // rouge
    if (percent >= 50) return '#fdd835'; // jaune
    return '#00e676'; // vert
  }
}
