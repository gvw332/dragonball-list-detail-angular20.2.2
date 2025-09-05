import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DragonballService } from '../services/dragonball';
import { DragonballDetail } from '../models/dragonball-detail';

@Component({
  selector: 'app-dragonball-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dragonball-detail.html',
  styleUrls: ['./dragonball-detail.scss'],
})
export class DragonballDetailComponent implements OnInit {
  character!: DragonballDetail; // utilise le nouveau type

  loading = true;

  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly dragonballService: DragonballService = inject(DragonballService);

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if (id) {
        this.dragonballService.getCharacterById(id).subscribe((data: DragonballDetail) => {
          this.character = data;
          console.log(this.character);
          this.loading = false;
        });
      }
    });
  }

  getKiPercentage(): number {
    if (!this.character?.maxKi || this.character.maxKi === 0) return 0;
    return Math.round((this.character.ki / this.character.maxKi) * 100);
  }

  getKiColor(): string {
    const percent = this.getKiPercentage();
    if (percent >= 80) return '#ff1744'; // rouge
    if (percent >= 50) return '#fdd835'; // jaune
    return '#00e676'; // vert
  }
}
