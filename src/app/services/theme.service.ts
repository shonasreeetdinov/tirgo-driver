import { Injectable, Inject, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Storage } from '@ionic/storage-angular';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    rendererFactory: RendererFactory2,
    private storage: Storage,
    private platform: Platform
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  async addBodyClass(bodyClass: string) {
    this.renderer.addClass(this.document.body, bodyClass);
  }

  async removeBodyClass(bodyClass: string) {
    this.renderer.removeClass(this.document.body, bodyClass);
  }

  async toggleDarkTheme(isDark = true, needUpdate = true) {
    if (needUpdate) {
      await this.storage.set('darkMode', isDark);
    }

    if (isDark) {
      this.addBodyClass('dark-mode');
      this.updateStatusBar(true);
    } else {
      this.removeBodyClass('dark-mode');
      this.updateStatusBar(false);
    }
  }

  async getCurrentSetting() {
    return await this.storage.get('darkMode');
  }

  async restore() {
    const val = await this.storage.get('darkMode');
    this.toggleDarkTheme(val, false);
  }

  private async updateStatusBar(isDark: boolean) {
    if (this.platform.is('ios')) {
      if (isDark) {
        await StatusBar.setStyle({ style: Style.Dark });
      } else {
        await StatusBar.setStyle({ style: Style.Light });
      }
    } else {
      // Handle status bar style for other platforms if needed
    }
  }
}
