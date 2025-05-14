import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {
  testimonials = [
    {
      message: 'منصة ممتازة وساعدتني أتابع حالات الحيوانات عندي بسهولة.',
      name: 'د. محمود النجار',
      role: 'طبيب بيطري – الجيزة',
    },
    {
      message: 'واجهة سهلة وسرعة في التواصل مع العملاء.',
      name: 'د. مريم عبد الله',
      role: 'عيادة بيطرية – الإسكندرية',
    },
    {
      message: 'ساعدتني أزود حجوزاتي وارتاح في تنظيم مواعيدي.',
      name: 'د. مصطفى فاروق',
      role: 'طبيب بيطري مستقل – القاهرة',
    },
  ];
}
