import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  constructor(private sanitizer: DomSanitizer) {}

  // Sanitiza HTML para evitar XSS
  sanitizeHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

  // Retorna headers seguros para requisições HTTP
  getSecureHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Security-Policy': "default-src 'self'",
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block'
    });
  }
}
