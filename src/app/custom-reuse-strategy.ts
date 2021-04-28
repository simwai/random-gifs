import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router'

export class CustomReuseStrategy implements RouteReuseStrategy {
  public routesToCache: string[] = ['carousel']
  public storedRouteHandles = new Map<string, DetachedRouteHandle>()

  // Decides if the route should be stored
  public shouldDetach(route: ActivatedRouteSnapshot): boolean {
     return this.routesToCache.indexOf(route.routeConfig.path) > -1
  }

  // Store the information for the route we're destructing
  public store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
     this.storedRouteHandles.set(route.routeConfig.path, handle)
  }

 // Return true if we have a stored route object for the next route
  public shouldAttach(route: ActivatedRouteSnapshot): boolean {
     return this.storedRouteHandles.has(route.routeConfig.path)
  }

  // If we returned true in shouldAttach(), now return the actual route data for restoration
  public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
     return this.storedRouteHandles.get(route.routeConfig.path)
  }

  // Reuse the route if we're going to and from the same route
  public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
     return future.routeConfig === curr.routeConfig
  }
 }
