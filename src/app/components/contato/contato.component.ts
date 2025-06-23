import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
  privacidade: boolean;
}

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {
  formData: FormData = {
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
    privacidade: false
  };

  isSubmitting = false;
  showSuccessMessage = false;

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.isSubmitting = true;
      
      // Simular envio do formulário
      setTimeout(() => {
        this.isSubmitting = false;
        this.showSuccessMessage = true;
        
        // Resetar formulário
        form.resetForm();
        this.formData = {
          nome: '',
          email: '',
          telefone: '',
          assunto: '',
          mensagem: '',
          privacidade: false
        };
        
        // Esconder mensagem de sucesso após 5 segundos
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 5000);
      }, 2000);
    }
  }
}
