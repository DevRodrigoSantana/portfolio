
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

interface Star {
  left: string;
  top: string;
  size: string;
  duration: string;
  delay: string;
  opacity: number;
  blur: string;
}

@Component({
  selector: 'app-stars',
 
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stars.html',
  styleUrl: './stars.scss',
})
export class Stars implements OnInit {
  @Input() starCount = 80;

  stars: Star[] = [];

  ngOnInit(): void {
    this.generateStars();
  }

  private rand(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  private generateStars() {
    this.stars = Array.from({ length: this.starCount }).map(() => {

      const depth = this.rand(0.2, 1);     
      // 0.2 = longe (pequena) | 1 = perto (grande)

      const size = depth * this.rand(1, 4);      
      const duration = (1 / depth) * this.rand(6, 14);  
      const opacity = depth;                       
      const blur = `${(1 - depth) * 4}px`;        

      return {
        left: `${this.rand(0, 100)}%`,
        top: `${this.rand(-10, 100)}%`,
        size: `${size}px`,
        duration: `${duration}s`,
        delay: `${this.rand(0, 10)}s`,
        opacity: parseFloat(opacity.toFixed(2)),
        blur
      };
    });
  }
}
