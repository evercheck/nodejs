import {CanActivate, ExecutionContext, Injectable} from '@nestjs/common';
import {Observable} from 'rxjs';
import {Reflector} from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) {
    }

    canActivate(
        context: ExecutionContext,
    ): boolean {
        // const roles = this.reflector.get<string[]>('roles', context.getHandler);
        const roles = this.reflector.get<string[]>('roles', context.getClass());
        if (!roles) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        console.log('khoa hoang');
        // In the node.js world, it's common practice to attach the authorized user to the request object.
        const hasRole = () => user.roles.some((role => roles.includes(role)));
        return user && user.roles && hasRole();
    }
}
