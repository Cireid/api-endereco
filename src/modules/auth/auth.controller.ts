import { Controller, UseGuards, Post, Request, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserDTO } from '../users/dto/user.dto';
import { DoesUserExist } from 'src/core/guards/doesUserExist.guard';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return await this.authService.login(req.user);
    }

    @UseGuards(DoesUserExist)
    @Post('signup')
    async signUp(@Body() user: UserDTO) {
        return await this.authService.create(user);
    }

}
