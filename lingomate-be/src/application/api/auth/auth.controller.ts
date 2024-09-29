import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from '@src/application/services/auth/auth.service';
import { CreateUserDto, LoginDto } from '@src/core/dtos/user.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register' })
  @ApiResponse({ status: 201, description: 'User created' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async register(@Body() createUserDto: CreateUserDto) {
    try {
      return this.authService.register(createUserDto);
    } catch (error) {
      return error;
    }
  }

  @Post('login')
  @ApiOperation({ summary: 'Login' })
  @ApiResponse({ status: 201, description: 'User created' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async login(@Body() loginInput: LoginDto) {
    try {
      return this.authService.login(loginInput);
    } catch (error) {
      return error;
    }
  }

  @Post('refresh-token')
  @ApiOperation({ summary: 'Refresh token' })
  @ApiResponse({ status: 201, description: 'Token refreshed' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async refreshToken(@Body('refreshToken') refreshToken: string) {
    try {
      return this.authService.refreshToken(refreshToken);
    } catch (error) {
      return error;
    }
  }
}
