# ADDAPPTABLES Reponsive
Utility for reponsive explorer.

## Getting Started
To get started, lets install the package thru npm:

```
npm i @addapptables/responsive --S
```

Install peer dependencies

```
npm i
@addapptables/ngrx-actions
@ngrx/store --S
```

## How to use
Addapptables reponsive depends on ngrx

```javascript
import { selectAllScreen } from '@addapptables/responsive';

export class MyService {
  constructor(private readonly _store: Store<any>) {}

  screen(){
      this._store.pipe(
            select(selectAllScreen),
            map(x => x.xs || x.sm) // mobile,
            distinctUntilChanged(),
            shareReplay()
      ).subscribe(isMobile => console.log(isMobile));
  }
}
```