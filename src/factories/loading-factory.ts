import { Injectable } from '@angular/core';
import { Loading, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';


@Injectable()
export class LoadingFactory {
  loading: Loading;
  
  constructor(
    private loadingCtrl: LoadingController,
    private statusBar: StatusBar
  ) {}

  exibir(conteudo: string='Aguarde') {
    this.loading = this.loadingCtrl.create({ content: conteudo });
    
    this.loading.present();
  }

  alterar(novoConteudo: string) {
    this.loading.setContent(novoConteudo);
  }

  encerrar() {
    try {
      this.loading.dismiss().catch(() => console.log('ERROR CATCH: LoadingController dismiss'));  
    } catch (e) {}
  }
}