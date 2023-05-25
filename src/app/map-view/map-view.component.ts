import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import Graphic from '@arcgis/core/Graphic';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import DefaultUI2D from '@arcgis/core/views/ui/2d/DefaultUI2D';
import Search from '@arcgis/core/widgets/Search';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements AfterViewInit, OnDestroy {
  @ViewChild('mapContainer', { static: true })
  private mapContainerRef?: ElementRef;
  private mapView?: MapView;
  private mapPoints = [
    {
      address: '1 Tyler Drive Yarmouth ME 04086',
      type: 'point',
      longitude: -70.1887779,
      latitude: 43.7819812
    },
    {
      address: '370 US Route 1 Falmouth ME 04105',
      type: 'point',
      longitude: -70.222409,
      latitude: 43.739053
    }
  ];

  constructor() {
  }

  ngAfterViewInit() {
    const map = new Map({
      basemap: 'satellite'
    });

    const pointSymbol = {
      type: 'simple-marker',
      color: [226, 119, 40],  // Orange
      outline: {
        color: [255, 255, 255], // White
        width: 1
      }
    };
    const graphicsLayer = new GraphicsLayer();
    graphicsLayer.addMany(this.mapPoints.map(p => (new Graphic({
      geometry: p as any,
      symbol: pointSymbol
    }))))
    map.add(graphicsLayer);

    const ui = new DefaultUI2D({
      components: [
        'attribution',
        'compass',
        'zoom'
      ]
    });
    ui.add(new Search({ view: this.mapView }), {
      position: 'top-right',
      index: 2
    });

    this.mapView = new MapView({
      container: this.mapContainerRef?.nativeElement,
      map,
      ui
    });

    this.mapView.when(
      () => {
        console.log('map initialized');
        this.mapView?.goTo({
          target: [this.mapPoints[0].longitude, this.mapPoints[0].latitude],
          zoom: 12
        });
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  ngOnDestroy() {
    this.mapView?.destroy();
  }

}
