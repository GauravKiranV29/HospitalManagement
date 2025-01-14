import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PatientsModule } from './patients/patients.module';
import { PantryModule } from './pantry/pantry.module';
import { DeliveryModule } from './delivery/delivery.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PatientsModule, PantryModule, DeliveryModule, AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
