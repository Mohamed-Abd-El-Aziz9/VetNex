import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  features = [
    {
      icon: 'fas fa-calendar-check',
      title: 'حجز مواعيد أونلاين',
      description: 'سهولة تنظيم المواعيد مع المرضى وتقليل الفوضى في العيادة.'
    },
    {
      icon: 'fas fa-pills',
      title: 'سجل علاجي إلكتروني',
      description: 'توثيق جميع بيانات الحالات والعلاجات المستخدمة بشكل احترافي.'
    },
    {
      icon: 'fas fa-bell',
      title: 'إشعارات وتنبيهات',
      description: 'تذكير بمواعيد الزيارات، والمتابعات، وتطعيمات الحيوانات الأليفة.'
    }
  ];
}

