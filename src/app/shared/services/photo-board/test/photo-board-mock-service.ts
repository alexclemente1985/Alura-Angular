import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { buildPhotoList } from "src/app/shared/components/photo-board/test/build-photo-list";
import { Photo } from "src/app/shared/interfaces/photo";
import { PhotoBoardService } from "../photo-board.service";

@Injectable()
export class PhotoBoardMockService extends PhotoBoardService {
    public override getPhotos(): Observable<Photo[]> {
        return of(buildPhotoList());
    }
}