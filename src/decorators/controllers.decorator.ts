import "reflect-metadata";

export function Controller(path: string): ClassDecorator {
  return (target: any) => {
    Reflect.defineMetadata("path", path, target);
    Reflect.defineMetadata("isController", true, target);
  };
}

export function Get(route: string, middlewares: any[] = []): MethodDecorator {
    return (target, propertyKey, descriptor: TypedPropertyDescriptor<any>) => {
      if (descriptor?.value) {
        Reflect.defineMetadata('method', 'get', descriptor.value);
        Reflect.defineMetadata('route', route, descriptor.value);
        Reflect.defineMetadata('middlewares', middlewares, descriptor.value); // Add middlewares
      }
    };
  }
  
  export function Post(route: string, middlewares: any[] = []): MethodDecorator {
    return (target, propertyKey, descriptor: TypedPropertyDescriptor<any>) => {
      if (descriptor?.value) {
        Reflect.defineMetadata('method', 'post', descriptor.value);
        Reflect.defineMetadata('route', route, descriptor.value);
        Reflect.defineMetadata('middlewares', middlewares, descriptor.value); // Add middlewares
      }
    };
  }
  
  export function Put(route: string, middlewares: any[] = []): MethodDecorator {
    return (target, propertyKey, descriptor: TypedPropertyDescriptor<any>) => {
      if (descriptor?.value) {
        Reflect.defineMetadata('method', 'put', descriptor.value);
        Reflect.defineMetadata('route', route, descriptor.value);
        Reflect.defineMetadata('middlewares', middlewares, descriptor.value); // Add middlewares
      }
    };
  }
  
  export function Delete(route: string, middlewares: any[] = []): MethodDecorator {
    return (target, propertyKey, descriptor: TypedPropertyDescriptor<any>) => {
      if (descriptor?.value) {
        Reflect.defineMetadata('method', 'delete', descriptor.value);
        Reflect.defineMetadata('route', route, descriptor.value);
        Reflect.defineMetadata('middlewares', middlewares, descriptor.value); // Add middlewares
      }
    };
  }